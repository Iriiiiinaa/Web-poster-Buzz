document.addEventListener('DOMContentLoaded', function() {
    const paintCanvas = document.querySelector('.js-paint');
    const drawContext = paintCanvas.getContext('2d');
    const colorPicker = document.querySelector('.js-color-picker');
    const lineWidthRange = document.querySelector('.js-line-range');
    const initButton = document.getElementById('initButton');

    let x = 0, y = 0;
    let isMouseDown = false;

    function initializeCanvas() {
        if (!drawContext) {
            console.error("Не удалось получить контекст Canvas!");
            return;
        }

        const rect = paintCanvas.parentElement.getBoundingClientRect();
        paintCanvas.width = rect.width;
        paintCanvas.height = rect.height;
        console.log("Canvas initialized: width=" + paintCanvas.width + ", height=" + paintCanvas.height);

        drawContext.lineCap = 'round';
        drawContext.strokeStyle = colorPicker.value;
        drawContext.lineWidth = (parseFloat(lineWidthRange.value) / 72) * paintCanvas.width * 0.1;

        console.log("Canvas styles set: color=" + drawContext.strokeStyle + ", lineWidth=" + drawContext.lineWidth);

        paintCanvas.addEventListener('mousedown', startDrawing);
        paintCanvas.addEventListener('mousemove', drawLine);
        paintCanvas.addEventListener('mouseup', stopDrawing);
        paintCanvas.addEventListener('mouseout', stopDrawing);

        paintCanvas.addEventListener('touchstart', startDrawingTouch);
        paintCanvas.addEventListener('touchmove', drawLineTouch);
        paintCanvas.addEventListener('touchend', stopDrawingTouch);
        paintCanvas.addEventListener('touchcancel', stopDrawingTouch);

        console.log("Event listeners added");
    }

    const stopDrawing = () => { isMouseDown = false; };

    const startDrawing = event => {
        isMouseDown = true;
        const rect = paintCanvas.getBoundingClientRect();
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;

        drawContext.beginPath();
        drawContext.moveTo(x, y);
    };

    const drawLine = event => {
        if (isMouseDown) {
            const rect = paintCanvas.getBoundingClientRect();
            const newX = event.clientX - rect.left;
            const newY = event.clientY - rect.top;

            drawContext.lineTo(newX, newY);
            drawContext.stroke();

            x = newX;
            y = newY;
        }
    };

    const startDrawingTouch = event => {
        isMouseDown = true;
        event.preventDefault();
        const rect = paintCanvas.getBoundingClientRect();
        x = event.touches[0].clientX - rect.left;
        y = event.touches[0].clientY - rect.top;

        drawContext.beginPath();
        drawContext.moveTo(x, y);
    };

    const drawLineTouch = event => {
        if (isMouseDown) {
            event.preventDefault();
            const rect = paintCanvas.getBoundingClientRect();
            const newX = event.touches[0].clientX - rect.left;
            const newY = event.touches[0].clientY - rect.top;

            drawContext.lineTo(newX, newY);
            drawContext.stroke();

            x = newX;
            y = newY;
        }
    };

    const stopDrawingTouch = () => {
        isMouseDown = false;
    };

            colorPicker.addEventListener('change', event => {
                drawContext.strokeStyle = event.target.value;
                console.log("Color changed to: " + drawContext.strokeStyle);
            });

            lineWidthRange.addEventListener('input', event => {
                const width = event.target.value;
                drawContext.lineWidth = (parseFloat(width) / 72) * paintCanvas.width * 0.1;
                console.log("Line width changed to: " + drawContext.lineWidth);
            });

            if (initButton) {
                initButton.addEventListener('click', initializeCanvas);
            } else {
                console.error("Кнопка с ID 'initButton' не найдена в DOM!");
            }
});