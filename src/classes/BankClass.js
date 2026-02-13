class Bank {
    /**
     * @returns {string} a unique string of any length
     */
    static createRoutingNumber() {
        //TODO
        return crypto.getRandomValues()
    }

    constructor(initialAmt = 0) {
        this.account = initialAmt;
    }

    /**
     *
     * @param {number} amt
     * @returns {promise} updates the account with the new amount and resolves with the new account amount
     */
    deposit = (amt) => {
        //TODO
        this.account = this.account + amt
        return new Promise((resolve) => resolve(this.account))
    };

    /**
     *
     * @param {number} amt
     * @returns {promise} rejects if the amount requested is more than what's available and resolves with the new account amount
     */
    withdraw = (amt) => {
        //TODO
        return new Promise((resolve, reject) => {
            if(amt > this.account) reject(new Error('Insufficient Funds'))

            this.account = this.account - amt
            resolve(this.account)
        })
    };

    /**
     *
     * @returns account property
     */
    getBalance = () => {
        return this.account;
    };
}

module.exports = {
    Bank,
};
