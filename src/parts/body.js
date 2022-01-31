import React, { useEffect, useState } from "react";
import './body.css'
import axios from "axios";
import { styled} from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
///?id=13776
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

function Body() {
  const [allArticles,setAllArticles] = useState([])
  const [allArticlesBack,setAllArticlesBack] = useState([])

  const [loading, setLoading] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [itemSelected, setItemSelected] = React.useState(null);



  const getArticles = async () =>{
    const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
    setAllArticles(response.data)
    setAllArticlesBack(response.data)    
  }
  const pagination = async () =>{
    setLoading(true);
    const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_start=${allArticles.length}`)
    let tmp = [...allArticles, ...response.data];
    setLoading(false)
    setAllArticles(tmp)
    setAllArticlesBack(tmp)
  }

  const openModalItem = (item) =>{
    setItemSelected(item)
    setOpenModal(true)
  }

  const articleById = async (id) =>{
    const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
    if(response.status === 200){
      setAllArticles([response.data])
      setAllArticlesBack([response.data]) 
    }
  
  }
  const getParams = () =>{
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    if(id != null){
      articleById(id)
    }else{
      getArticles()
    }
  }
  useEffect(()=>{
    getParams() 
  },[])

  const cardLeft = (item,key) =>{
      return <div key={key}>
          <div style={{display:"flex",flexDirection:'row',marginBottom:70}}>
              <div style={{width:300}}>
                <img alt="" style={{width:280,height:180}} src={item.imageUrl}/>
              </div>              
              <div className="description">
                <label className="title">{item.title}</label>
                <div>
                    <label className="date-ar">{new Date(item.publishedAt).toLocaleDateString()}</label>
                    <label className="date-ar-2">{item.newsSite}</label>
                </div>
                <label className="summary">{item.summary}</label>
                <div style={{marginTop:5}}>
                  <Button onClick={()=>openModalItem(item)} style={{backgroundColor:'#302e53'}} variant="contained" size="small">
                    Mostrar mais
                  </Button>
                </div>

              </div>    
        
          </div>
      </div>
  }

  const CardRight = (item,key) =>{
    return <div key={key}>
            <div style={{display:"flex",flexDirection:'row',marginBottom:70}}>
            
                <div className="description">
                <label className="title">{item.title}</label>
                <div>
                    <label className="date-ar">{new Date(item.publishedAt).toLocaleDateString()}</label>
                    <label className="date-ar-2">{item.newsSite}</label>
                </div>
                <label className="summary">{item.summary}</label>
                <div style={{marginTop:5}}>
                  <Button onClick={()=>openModalItem(item)} variant="contained" size="small" style={{backgroundColor:'#302e53'}}>
                    Mostrar mais
                  </Button>
                </div>
                </div>  
                <div style={{width:300}}>
                <img alt="" style={{width:280,height:180}} src={item.imageUrl}/>
                </div>    
        
            </div>
        </div>   
  }

  return (
    <div className="contnainer-body">
        <div className="header">
          <div className="header-controls">
            
            <div style={{width:'60%'}}/>
            <Autocomplete
              sx={{ width: 300 }}
              id="custom-input-demo"
              onChange={(event, newValue) => {
                if(newValue === null)
                  setAllArticles(allArticlesBack)
                else{
                  let value = allArticles.filter((el)=> el.title === newValue)
                  setAllArticles(value)
                }
              }}
              options={allArticles.map((option) => option.title)}
              freeSolo
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <TextField  {...params} label="Buscar artigo..." />
                </div>
              )}
            />
            <div style={{margin:15}}/>
            <Autocomplete
              onChange={(event, newValue) => {
                let rev = allArticlesBack
                if(newValue === null)
                  setAllArticles(allArticlesBack)
                else{

                  if(newValue === 'Mais novas'){                    
                    setAllArticles(allArticlesBack)
                  }else{
                    if(newValue === 'Mais antigas'){
                      let reveresed = [...rev].reverse()
                      setAllArticles(reveresed)
                    }
                  }
                }
              }}
              id="disabled-options-demo"
              options={['Mais antigas','Mais novas']}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params}  label={"Filtrar"}/>}
            />
          </div>

        </div>
        <div style={{marginBottom:50}}>
          <img alt="" style={{width:150,height:150}} src="https://cdn-icons-png.flaticon.com/512/231/231138.png"></img>
        </div>

        <div style={{border:"solid 1px #707070",width:'99.9%'}}/>
        <div style={{paddingLeft:100,paddingRight:100,marginTop:10,paddingTop:20}}>
        {
            allArticles.map((item,key)=> key%2 === 0 ? cardLeft(item,key) : CardRight(item,key))
        }

        </div>
        {allArticles.length > 0 ?
        <div style={{position:'relative',bottom:40}}>
          <LoadingButton
            onClick={pagination}
            loading={loading}
            loadingIndicator="Carregando..."
            variant="outlined"
          >
            Carregar mais
          </LoadingButton>
        </div>
        :<div/>}
        {itemSelected != null ?
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={openModal}
          onClose={()=>setOpenModal(!openModal)}
          BackdropComponent={Backdrop}
        >
          <div style={{backgroundColor:'white'}}>
            <div style={{display:"flex",flexDirection:'row',padding:30}}>
              <div style={{width:300}}>
                <img alt="" style={{width:280,height:180}} src={itemSelected.imageUrl}/>
              </div>   
              <div className="description">
                <label className="title">{itemSelected.title}</label>
                <div>
                    <label className="date-ar">{new Date(itemSelected.publishedAt).toLocaleDateString()}</label>
                    <label className="date-ar-2">{itemSelected.newsSite}</label>
                </div>
                <label className="summary">{itemSelected.summary}</label>
                <div style={{marginTop:5}}>
                  <Button onClick={()=>window.location.href=`${itemSelected.url}`} variant="contained" size="small" style={{backgroundColor:'#302e53'}}>
                    ir para o site
                  </Button>
                </div>
              </div>           
            </div>
          </div> 
        </StyledModal>
        : <div/>}
    </div>
  );
}

export default Body;
