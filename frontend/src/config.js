const MyNFT = require('./contracts/MyNFT')
const Auctions = require('./contracts/Auctions')

export default {
	MYNFT_CA: '0x7e06a17fd588bee21feae558127597dbf1b019c1',
	AUCTIONS_CA: '0xd717e406c67450866a5893ae14e51a153533e831',

	MYNFT_ABI: MyNFT.abi,
	AUCTIONS_ABI: Auctions.abi,

	GAS_AMOUNT: 500000
}
