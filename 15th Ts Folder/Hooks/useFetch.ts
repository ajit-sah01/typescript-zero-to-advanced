import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            try {
                setState((prev) => ({
                    ...prev,
                    loading: true,
                    error: null,
                }));

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP Error ${response.status}`);
                }

                const data = (await response.json()) as T;

                if (isMounted) {
                    setState({
                        data,
                        loading: false,
                        error: null,
                    });
                }
            } catch (error: unknown) {
                if (!isMounted) return;

                if (error instanceof Error) {
                    setState({
                        data: null,
                        loading: false,
                        error: error.message,
                    });
                } else {
                    setState({
                        data: null,
                        loading: false,
                        error: "Unknown error occurred",
                    });
                }
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return state;
}
