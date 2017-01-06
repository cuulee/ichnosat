import logging

from flask import Flask, request

app = Flask(__name__)
from flask_cors import CORS
from z_old.scientific_processor import ScientificProcessor
CORS(app)


@app.route('/process', methods=['POST'])
def process_req():
    obj = request.get_json()
    logging.debug("process product with path: " + obj['path'])
    app.scientific_processor.push_product(obj['path'])
    return obj['path']

def main():
    app.scientific_processor = ScientificProcessor()
    app.run(debug=True, host='0.0.0.0', port=5002)

    return


if __name__ == '__main__':
    main()