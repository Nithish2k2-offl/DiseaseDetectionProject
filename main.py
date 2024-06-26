from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import os
from remedies import REMEDIES
import threading

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("C:/Users/nith/Desktop/sample1/basic models/1")

CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]


@app.get("/ping")
async def ping():
    return "Hello"

@app.get("/api/hello")
async def read_root():
    return {"message": "Hello, FastAPI!"}

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image


@app.post("/predict")
async def predict(
        file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)

    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    remedies = REMEDIES.get(predicted_class, "Remedies not available.")
    confidence = np.max(predictions[0])

    return {
        'class': predicted_class,
        'confidence': float(confidence),
        'remedies': remedies
    }
def ok():
    import subprocess

    command = "npm run dev"

    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    print("Command output:")
    print(result.stdout)

    if result.returncode != 0:
        print("Error:", result.stderr)


if __name__ == "__main__":
    t1 = threading.Thread(target=ok)
    t1.start()
    uvicorn.run(app, host='localhost', port=8000)
