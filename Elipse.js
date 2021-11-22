class Elipse {
	
	constructor ( x,  y,  diametro,  colorR,  colorG,  colorB) {
		this.x = x;
		this.y = y;
		this.diametro = diametro;
		this.colorR = colorR;
		this.colorG = colorG;
		this.colorB = colorB;
		
	}
	
	pintar() {

		fill(colorR, colorG, colorB);
		ellipse(x, y, diametro, diametro);
	
	
	
    }	

}