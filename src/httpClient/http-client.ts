import axios from "axios";

class HttpClientImpl {
  instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  post<T>(url: string, data: any): Promise<T> {
    return this.instance.post<T>(url, data).then((x) => x.data);
  }

  put<T>(url: string, data: any): Promise<T> {
    return this.instance.put<T>(url, data).then((x) => x.data);
  }

  get<T>(url: string): Promise<T> {
    return this.instance.get<T>(url).then((x) => x.data);
  }

  delete<T>(url: string, data: any): Promise<T> {
    return this.instance.delete<T>(url, { data }).then((x) => x.data);
  }
}

export const HttpClient = new HttpClientImpl();
