export const transactionType = {
    /**Thanh toán tiền mặt khi nhận hàng */
    normal: {
        code: 0,
        html: '<span class="noicon">Thanh toán tiền mặt khi nhận hàng</span>',
        displayOrder: 1,
        containerClasses: 'normal-payment',
    },
    /**Thanh toán bằng <b>ATM</b> */
    atm: {
        code: 1,
        html: '<span>Thanh toán thẻ<i class="cartnew-atm"></i></span><small>(Có Internet Banking)</small>',
        displayOrder: 3,
        containerClasses: '',
    },
    /**Thanh toán bằng <b>VISA, Master Card</b> */
    visaMaster: {
        code: 2,
        html: '<span>Thanh toán thẻ</span><div class="listcard"> <i class="cartnew-visa"></i> <i class="cartnew-mastercard"></i> <i class="cartnew-jcb"></i></div>',
        displayOrder: 4,
        containerClasses: '',
    },
    /**Thanh toán qua QR code */
    qrCode: {
        code: 3,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 6,
        containerClasses: 'qrcode',
    },
    /**Thanh toán qua QR code chạy campaigns */
    qrCodeCampaigns: {
        code: 6,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 6,
        containerClasses: 'qrcode',
    },
    /**Thanh toán qua QR code chạy campaigns A52 */
    qrCodeCampaignsA52: {
        code: 7,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 7,
        containerClasses: 'qrcode',
    },
    /**Thanh toán qua QR code chạy campaigns */
    qrCodeCampaignsA72: {
        code: 8,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 8,
        containerClasses: 'qrcode',
    },
    /**Thanh toán qua QR code chạy campaigns */
    qrCodeCampaignsML: {
        code: 9,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 9,
        containerClasses: 'qrcode',
    },
    /**Thanh toán qua QR code chạy campaigns */
    qrCodeCampaignsWatch300k: {
        code: 10,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 10,
        containerClasses: 'qrcode',
    },
     /**Thanh toán qua QR code chạy campaigns */
     qrCodeCampaignsWatch500k: {
        code: 11,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 11,
        containerClasses: 'qrcode',
    },
     /**Thanh toán qua QR code chạy campaigns */
     qrCodeCampaignsAllCate200k: {
        code: 12,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 12,
        containerClasses: 'qrcode',
    },
     /**Thanh toán qua QR code chạy campaigns */
     qrCodeCampaignsAllCate300k: {
        code: 13,
        html: '<span>Thanh toán <b>QR Code</b></span><i class="cartnew-qrcode"></i>',
        displayOrder: 13,
        containerClasses: 'qrcode',
    },
    /**Cà thẻ khi nhận hàng */
    useCardWhenReceiveProducts: {
        code: 999,
        html: '<span class="noicon">Cà thẻ khi nhận hàng</span>',
        displayOrder: 2,
        containerClasses: 'normal-payment',
    },
    /**Thanh toán tại siêu thị gần nhất */
    normalAtStore: {
        code: 0,
        html: '<span class="noicon">Thanh toán tại siêu thị gần nhất</span>',
        displayOrder: 1,
        containerClasses: 'normal-payment',
    },
    /**Thanh toán qua Momo */
    momo: {
        code: 4,
        html: '<span>Thanh toán qua <b>MoMo</b></span><i class="cartnew-momo"></i>',
        displayOrder: 5,
        containerClasses: 'momo',
    },
    /**Thanh toán qua Momo */
    moca: {
        code: 5,
        html: '<span>Thanh toán qua <b>Moca</b></span><i class="cartnew-moca"></i>',
        displayOrder: 14,
        containerClasses: 'moca',
    },
}

export const transactionStatusType = {
    /**Đặt hàng thường thành công */
    normal: 0,
    /**Thanh toán thất bại */
    failed: 1,
    /**Thanh toán thành công */
    success: 2,
    /**Đang chờ xử lý */
    pending: 3,
}