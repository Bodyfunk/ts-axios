import { transformRequest } from "./helpers/data"
import { buildURL } from "./helpers/url"
import { AxiosRequestConfig } from "./types/index"
import xhr from "./xhr"

function axios(config: AxiosRequestConfig) {
    processConfig(config)
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
    config.url = transformUrl(config)
    config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
    const { url, params } = config
    return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
    return transformRequest(config.data)
}

export default axios