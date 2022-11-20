

const styles = {
    width:"500px",
    heigh:"500px",
    margin:"20px",
    padding:"30px"
}
const ImgComponent = (porps)=>{

    return <img style={styles} src={porps.link} alt="link" />
}

export default ImgComponent