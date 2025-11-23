const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ✅ Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "../uploads/events");
if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir, { recursive: true });
}

// ✅ Configure local file storage
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadsDir);
	},
	filename: function (req, file, cb) {
		// Generate unique filename: timestamp-originalname
		const uniqueName = Date.now() + "-" + file.originalname;
		cb(null, uniqueName);
	},
});

// ✅ File filter - accept images by extension and MIME type
const fileFilter = (req, file, cb) => {
	const allowedExtensions = /\.(jpg|jpeg|png)$/i;
	const allowedMimeTypes = /^image\/(jpeg|jpg|png)$/i;

	const hasValidExtension = allowedExtensions.test(file.originalname);
	const hasValidMimeType = allowedMimeTypes.test(file.mimetype);

	if (hasValidExtension || hasValidMimeType) {
		cb(null, true);
	} else {
		cb(new Error("Only .jpg, .jpeg, .png images are allowed"), false);
	}
};

const upload = multer({
	storage,
	fileFilter,
	limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

module.exports = upload;
