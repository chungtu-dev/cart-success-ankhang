const currency = {
    formatCurrency(price) {
        var formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        if(price > 0) {
            return formatter.format(price);
        }
        else{
            return formatter.format(price = 0);
        }
    },    
}
export default currency