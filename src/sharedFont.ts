export default function getSharedFontStyles(
  fontSize = 12,
  fontWeight = 400,
): string {
  return `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: ${fontWeight};
        font-size: ${fontSize}px;
    `;
}
