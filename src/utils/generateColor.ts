export const generateColor = ():string =>{
    // генерируем случайное число от 0 до 255 для каждого канала RGB
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // собираем строку в формате CSS
    const color = `rgb(${red}, ${green}, ${blue})`;

    // возвращаем строку с сгенерированным цветом
    return color;
}