// 定义接口类型
export interface AxiosRequestConfig{
    url: string,
    method?: Method,
    data?: any,
    params?:any
}

export type Method = 'get' | 'GET'
    | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'Options'
    | 'post' | "POST" | 'put' | "PUT" | 'patch' | 'PATCH'