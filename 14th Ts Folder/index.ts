interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const FetchData = async (): Promise<void> => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        const data = (await response.json()) as Todo;
        console.log("Todo:", data);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        } else {
            console.log("Unknown error:", error);
        }
    }
};

FetchData();
