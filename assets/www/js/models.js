function Product () {
    this.id=0;
    this.name="";
    this.description="";
    this.number="";
    this.price=0;
    
}

function OrderItem() {
	this.id=0;
	this.product=new Product();
	this.quantity=1;
	this.discount=0;
	
	this.getPrice = function() {
		return this.product.price;
	};
}

function Order() {
	this.id=0;
	this.items=new array();
	this.shippingRate=0;
	this.taxRate=0;
	
	this.shippingRateIsPercent=true;
	this.taxRateIsPercent=true;
	
	this.get
}