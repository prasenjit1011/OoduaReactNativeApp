import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({
    container: {
		flex: 1,
		//paddingTop: StatusBar.currentHeight,
	},
	scrollView: {
		marginHorizontal: 0,
		//backgroundColor: '#808080',
	},
	pt5:{
		paddingTop:5,
	},
	pl5:{
		paddingLeft:5,
	},
	width95:{
		width:'95%',
	},
	appiconlogo:{
		...StyleSheet.absoluteFillObject,
		alignSelf: 'flex-end',
		marginTop: 15,
		//paddingTop:50,
		right:3,
		left:'90%',
		//display:'none',
		//top:'3%'  
		//position: 'absolute', // add if dont work with above
	},
	appicon:{
		width:30,
		height:30,
	},
	appiconbtn:{
		backgroundColor:'#F84',
		width:40,
		height:40,
		padding:5,
		//position:'absolute',
	},
	txtMsg:{
		color:'#F00', 
		alignSelf:'center'
	},
	location:{
		//backgroundColor: '#FFF', 
		paddingBottom:1, 
		marginBottom:0,
	},
	choosePackageSection:{
		//flex: 8, 
		//backgroundColor: 'red', 
		//display:'none'
	},
	
	headerContainer:{
		flexDirection:'row',
		marginLeft:20, 
		marginRight:20, 
		marginTop:15, 
		//backgroundColor: '#FF0',
	},
	subHeaderTitle:{
		fontSize:14, 
		fontWeight:'bold', 
		color: '#090'
	},
	locationFrom:{
		fontSize:14, 
		fontWeight:'bold', 
		color: '#D6D6D6',
	},
	headerTitle:{
		fontSize:24, 
		fontWeight:'bold', 
		color: '#444'
	},
	destinationContainer:{
		borderColor: '#CCC', 
		borderWidth:2, 
		marginLeft:20, 
		marginRight:20, 
		marginTop:5, 
		marginBottom:3, 
		paddingTop:5, 
		paddingBottom:5, 
		paddingLeft:15, 
		borderRadius:10, 
		flexDirection:'column',

		//backgroundColor: '#FFF',
	},
	choosePackage:{
		borderColor: '#CCC', 
		borderWidth:2, 
		borderTopLeftRadius:10, 
		borderTopRightRadius:10,
		marginLeft:10, 
		marginRight:10, 
		marginTop:1, 
		paddingLeft:15,
		paddingRight:15,
		paddingTop:5, 
		paddingBottom:10,
		//backgroundColor: '#FFF', 
	},
	
	mylogo:{
		marginTop:70,
		marginLeft:1,
		marginRight:1,
		alignItems:'center',
		alignSelf:'center',
		resizeMode: 'cover',
		width: 350,
        height: 100,
	},
	locationInput:{
		borderColor:"#CCC", 
		height: 24, 
		marginTop:1, 
		marginBottom:2, 
		borderWidth: 1, 
		color:"#000", 
		paddingLeft:10,
		paddingTop:1, 
		paddingBottom:1,
		borderRadius: 0,
        fontSize: 14,
		width:'95%',
	},
	receiverSelect:{
		borderColor:"#B7B7B7", 
		height: 22, 
		marginTop:1, 
		marginBottom:2, 
		borderWidth: 2, 
		color:"#B7B7B7", 
		paddingLeft:5,
		paddingTop:2, 
		paddingBottom:1,
		borderRadius: 5,
        fontSize: 12,
	},
	receiverSelectOption:{
		borderColor:"#B7B7B7", 
		color:"#B7B7B7", 
		height: 22, 
		borderWidth: 0, 
		paddingLeft:0,
		paddingTop:1, 
		paddingBottom:1,
		borderRadius: 5,
        marginTop:1, 
		marginBottom:2, 
		fontSize: 12,
	},
	receiverInput:{
		borderColor:"#B7B7B7", 
		height: 22, 
		marginTop:1, 
		marginBottom:2, 
		borderWidth: 2, 
		color:"#B7B7B7", 
		paddingLeft:10,
		paddingTop:1, 
		paddingBottom:1,
		borderRadius: 5,
        fontSize: 12,
	},
	inputUsername:{
		borderColor:"#CCC", 
		height: 40, 
		marginTop:2, 
		marginBottom:8, 
		borderWidth: 2, 
		color:"#FFF", 
		paddingLeft:10,
		paddingTop:1, 
		paddingBottom:1,
		borderRadius: 0,
        fontSize: 20,
	},
	inputPassword:{
		borderColor:"#FFF", 
		height: 50, 
		marginTop:2, 
		marginBottom:5, 
		borderWidth: 2, 
		color:"#FFF", 
		paddingLeft:25, 
		borderRadius: 10,
        fontSize: 20,
	},

    createAccount:{
        color: '#828282',
        fontSize: 18,
    },
	bookBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 6,
		paddingHorizontal: 32,
		borderRadius: 10,
		elevation: 3,
		backgroundColor: '#45B649',
		marginTop:10,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 6,
		paddingHorizontal: 32,
		borderRadius: 10,
		elevation: 3,
		backgroundColor: '#080',
		marginTop:10,
	},
	text: {
		fontSize: 20,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},	



    modalView: {
        margin: 0,
        justifyContent: 'flex-end',
		borderRadius:25,
        //opacity:0.9,
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        opacity:1,
		borderRadius:20,
    },

    content: {
        width: '100%',
        height: '80%',
        backgroundColor: '#FFF',
		borderTopLeftRadius:20,
		borderTopRightRadius:20,
        //overflow: 'hidden',
      },
      bookingSuccess:{
        marginTop:30, 
		marginLeft:1, 
		marginRight:1, 
		alignItems:'center', 
		alignSelf:'center', 
		resizeMode: 'cover', 
        width: '62%', 
        height: '47%', 
        //backgroundColor: '#fff',
    },
	
	
	
	//Create Account
	reglogo:{
		marginTop:60,
		marginLeft:1,
		marginRight:1,
		alignItems:'center',
		alignSelf:'center',
		resizeMode: 'cover',
		width:43*6,
		height:14*6,
		opacity:1,
		//marginBottom:100,
		//width: 43*2*2*2,
        //height: 14*2*2*2,
	},
    frmContainer:{
        flex:12,
    },
	scrollView: {
        //backgroundColor: 'pink',
        marginHorizontal: 0,
    },
	sectionStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
        opacity:0.3,
		//borderWidth: 0.5,
		borderColor: '#FFF',
		borderWidth:2,
		height: 50,
		borderRadius: 10,
		margin: 10,
		paddingLeft:2,
		marginLeft:'5%',
		marginRight:'5%',
	},
	imageStyle: {
		padding: 10,
		margin: 5,
		height: 25,
		width: 25,
		resizeMode: 'stretch',
		alignItems: 'center',
	},
	inpField:{
		flex:1,
		color:'#FFF',
        fontWeight:'bold',
        //opacity:0.9,
        backgroundColor:'#333'
	},
	loginFrmContainer:{
		flex: 16, 
		padding:"5%"
	},
    loginTxt:{
        color:'#29672B',
    },
	loginBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 10,
		elevation: 3,
		backgroundColor: '#45B649',
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:30,
	},
	loginBtnTxt:{
		fontSize: 20,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
		paddingLeft:5,
		paddingRight:5,
	},
	bookingBtnTxt:{
		fontSize: 20,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
    forgotPassword: {
        marginBottom:20, 
        textAlign:'right',
        color:'#BAB8B6',
        marginLeft:'5%',
        marginRight:'5%',
    },
	
	//Thanks You
	thanksHeader:{
		fontSize:30, alignItems:'center', alignSelf:'center', fontWeight: 'bold', 
		//backgroundColor: '#fff', 
	},
	thanksHeaderTxt:{
		fontSize:24, alignItems:'center', alignSelf:'center', fontWeight: 'bold', 
		//backgroundColor: '#fff', 
	},
	thanksHeaderContent:{
		fontSize:12, 
		fontWeight: 'bold', paddingLeft:'5%', paddingRight:'5%', paddingTop:'2%', lineHeight:22,  textAlign: 'center', 
		//backgroundColor: '#fff',
	},
	thankBookagain:{
		fontSize:18, alignItems:'center', alignSelf:'center', fontWeight: 'bold', fontWeight:'bold', paddingTop:20, 
		//backgroundColor: '#fff',
	},
	thanksMsgBtn:{
		alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 32, borderRadius: 10, elevation: 3, marginTop:20, marginLeft:20, marginRight: 20, 
		backgroundColor: '#45B649', 
	},

	//Booking / Choose Package
	choosePack:{
		flexDirection: "row",
		//backgroundColor: "#F00",
		width:'100%',
	},
	sectionHeader: {
		fontWeight: '800',
		fontSize: 18,
		color: '#000',
		marginTop: 1,
		marginBottom: 1,
	},
	choosePackageIcon:{
		width:30,
		height:30,
		position: 'absolute', 
		right: 0
		//flex:1,
	},

	choosePackageTxt:{
		fontSize:18, fontWeight:'bold', color: '#444'
	},
	choosePackageTitle:{
		fontSize:23, fontWeight:'bold', color: '#000'
	},
	receiverDetails:{
		fontSize:16, marginBottom:1,
	},
	receiverDetailsTxt:{
		fontSize:10, marginBottom:2, color:'#555',
	},
	shippingType:{
		backgroundColor:'#FF0',
		width:'100%',
	},
	bagDetails:{
		fontSize:7, 
		paddingTop:5, 
		color:'#500',
		position: 'absolute', 
		right: 0
	},
	item: {
		padding:8,
		//backgroundColor: '#45B649',
		marginRight:10,
		marginTop:8,
		marginBottom:8,
		borderRadius:15,
		width:180,
		height:70,
		flexDirection: 'row',
	},
	itemPhoto: {
		width: 50,
		height: 50,
		flexDirection:'column',
	},
	itemText: {
		color: '#00F',
		marginTop: 10,
		marginBottom: 5,
		flexDirection:'column',
	},
	packageTxt:{
		color:'#FFF',
		fontSize:14,
	},
	packageDetail:{
		color:'#FFF',
		fontSize:10,
	},
	packagePrice:{
		color:'#FFF',
		fontSize:12,
	},
	packageContent:{
		//backgroundColor:'#EEE', 
		width:'65%', 
		flexDirection: 'column',
		color:'#FFF',
	},
	packageImg:{
		//backgroundColor:'#EEE', 
		width:'35%', 
		flexDirection: 'column'
	},
	loginBottomTxt:{
		flex: 2, 
		paddingTop:"5%", 
		alignSelf:"center"
	},
	topHr:{ 
		width:150, 
		alignSelf:'center', 
		height: 4, 
		backgroundColor: '#C8D2DA', 
		marginTop:1, 
		paddingTop:1, 
		paddingBottom:5,  
	},
	bottomHr:{ 
		width:120, 
		alignSelf:'center', 
		height: 4, 
		backgroundColor: '#4A4B4D', 
		marginTop:10, 
		paddingTop:1,  
	},
	bottomHrCreateAcc:{
		width:170, 
		alignSelf:'center', 
		height: 1, 
		backgroundColor: '#C8D2DA', 
		marginTop:1,  
	},
	destDot:{ 
		width:10, 
		height: 10, 
		backgroundColor: '#2DBB54', 
		marginTop:10, 
		paddingTop:1,  
	},
	destLoc:{ 
		marginTop:'2%', 
		flexDirection:'row'
	}
});