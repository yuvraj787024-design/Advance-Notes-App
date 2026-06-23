const express = require('express')
const notesController = require('../controllers/notes.controller')
const authMiddleware  = require('../middlewares/auth.middleware')
const router = express.Router()
const upload =require("../middlewares/upload.middleware");


router.post('/makeNotes', authMiddleware , upload.single("image") , notesController.makeNotes)

router.get('/fetchSubject', authMiddleware, notesController.getSubjectList)

router.get('/fetchChapters/:subjectId', authMiddleware , notesController.getChapterList)

router.get('/fetchTopic/:subjectId/:chapterId', authMiddleware , notesController.getTopicList)

router.get('/fetchDescription/:subjectId/:chapterId/:topicId', authMiddleware , notesController.getTopicDescription)

router.patch('/updateTopic/:subjectId/:chapterId/:topicId',authMiddleware,notesController.updateTopicName);

router.patch('/updateChapter/:subjectId/:chapterId',authMiddleware,notesController.updateChapterName);

router.patch('/updateSubject/:subjectId',authMiddleware,notesController.updateSubjectName);

router.delete('/deleteTopic/:subjectId/:chapterId/:topicId',authMiddleware,notesController.deleteTopic);

router.delete('/deleteChapter/:subjectId/:chapterId',authMiddleware,notesController.deleteChapter);

router.delete('/deleteSubject/:subjectId',authMiddleware,notesController.deleteSubject);

module.exports = router