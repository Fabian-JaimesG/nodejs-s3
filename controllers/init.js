import { request, response } from "express";
import { FunctionUploadFile, FunctionGetFileByName, FunctionDownloadFile, FunctionGetFiles, FucntionGetFileURL } from "../s3.js";

export const getFiles = async (req = request, res = response) => {
    const result = await FunctionGetFiles()
    res.json(result.Contents)
}

export const getFileByName = async (req = request, res = response) => {
    const name = req.params.fileName
    const result = await FunctionGetFileByName(name)
    res.json(result.$metadata)
}

export const downloadFile = async (req = request, res = response) => {

    try {
        const name = req.params.fileName
        await FunctionDownloadFile(name)
        res.json({ msg: 'File dowload.' })

    } catch (error) {
        res.json({ msg: error })
    }

}

export const getUrlFile = async (req = request, res = response) => {

    try {
        const name = req.params.fileName
        const url = await FucntionGetFileURL(name)
        res.json({ url })

    } catch (error) {
        res.json({ msg: error })
    }

}

export const postInit = async (req = request, res = response) => {
    const file = req.files.file
    const resS3 = await FunctionUploadFile(file)
    res.json({
        msg: 'uploaded file'
    })
} 
