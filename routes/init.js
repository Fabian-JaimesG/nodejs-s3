import { Router } from "express";
import { getFiles, getFileByName, postInit, downloadFile, getUrlFile } from "../controllers/init.js";

export const router = Router()

router.get("/files", getFiles)
router.get("/files/:fileName", getFileByName)
router.get("/filesByURL/:fileName", getUrlFile)
router.get("/dowloadFile/:fileName", downloadFile)
router.post("/files", postInit)