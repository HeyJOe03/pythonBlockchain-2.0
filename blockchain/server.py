from app import create_app, serverio
from app.config import PORT, template_folder, static_folder

app = create_app(debug=True, template_folder=template_folder, static_folder=static_folder)

if __name__ == '__main__':
    try:
        serverio.run(app, port=PORT)
    except Exception as e:
        print(str(e))