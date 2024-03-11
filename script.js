const textInput = document.getElementById('textInput');
const paragraphCount = document.getElementById('paragraphCount');

textInput.addEventListener('input', updateParagraphCount);

function updateParagraphCount() {
    const text = textInput.value.trim();
    const paragraphs = text === '' ? 0 : text.split(/\n+/).length;
    paragraphCount.textContent = paragraphs;
}
