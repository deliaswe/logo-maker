// function for shapes, setColor, and setText
function shapes(color,text) {
this.setColor = color;
this.setText = text; 
};

shapes.prototype.circle = (setColor) =>{ 
return `<circle cx="150" cy="100" r="80" fill="${setColor}"/>`;
};

shapes.prototype.triangle = (setColor) =>{
return `<polygon points="40,220 250,200 145,0" style="fill:${setColor};"/>`; 
};

shapes.prototype.square = (setColor) =>{
return  `<rect x="85" y="30" rx="10" ry="10" width="150" height="150"  fill="${setColor}" />`;
};

shapes.prototype.text = (setText, textColor) => {
return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
${setText.toUpperCase()}
</text>`;
};
module.exports = shapes;