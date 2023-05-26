import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export class HttpClient {
  static post<T>(url: string, data: any): Promise<T> {
    return instance.post<T>(url, data).then((x) => x.data);
  }

  static put<T>(url: string, data: any): Promise<T> {
    return instance.put<T>(url, data).then((x) => x.data);
  }

  static get<T>(url: string): Promise<T> {
    return instance.get<T>(url).then((x) => x.data);
  }

  static delete<T>(url: string, data: any): Promise<T> {
    return instance.delete<T>(url, { data }).then((x) => x.data);
  }
}
