import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const FetchData = async (): Promise<void> => {
  try {
    const response = await axios.get<Todo>(
      "https://jsonplaceholder.typicode.com/todos"
    );

    console.log("Todo", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);

      if (error.response) {
        console.log(error.response.status);
      }
    } else {
      console.log("Unknown error", error);
    }
  }
};

FetchData()