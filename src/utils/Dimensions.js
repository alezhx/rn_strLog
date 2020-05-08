import {Dimensions, Platform} from 'react-native'
import {PLATFORM} from './Platform';

const ScreenDimensions = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
}

const NavBarHeight = {
	height: PLATFORM.isIOS ? ((Platform.isPad) ? (parseInt(Platform.Version, 10) < 12 ? 64: 70) : (Dimensions.get('window').height < 812 ? 64 : 88) ) : 56,
}

const StatusBarHeight = {
	height: PLATFORM.isIPhoneX ? 44 : 20
}

const TabBar = {
	height: (PLATFORM.isIOS ? ((Dimensions.get('window').height < 812 ? 49 : 73)) : 56) //RNN - android MD: 56
}

export {
	ScreenDimensions,
	TabBar,
	NavBarHeight,
	StatusBarHeight
}
