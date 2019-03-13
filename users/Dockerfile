FROM python:3.6

RUN mkdir /app/
WORKDIR /app/

COPY . .

RUN pip install -r requirements.txt

EXPOSE 50051

CMD ["python", "server.py"]
