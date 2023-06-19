class Bank {
	/**
	 * @returns {string} a unique string of any length
	 */
	static createRoutingNumber() {
		return Math.random().toString(36).substring(2, 9);
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
		return new Promise((resolve, reject) => {
			if (amt < 0) {
				reject("You can't deposit a negative amount");
			} else {
				this.account += amt;
				resolve(this.account);
			}
		});
	};

	/**
	 *
	 * @param {number} amt
	 * @returns {promise} rejects if the amount requested is more than what's available and resolves with the new account amount
	 */
	withdraw = (amt) => {
		return new Promise((resolve, reject) => {
			if (amt > this.account) {
				reject(new Error('Insufficient Funds'));
			} else {
				this.account -= amt;
				resolve(this.account);
			}
		});
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
