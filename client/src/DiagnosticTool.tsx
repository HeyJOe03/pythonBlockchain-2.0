import {useState, useContext, useEffect} from "react";
import { ServerAddressContext } from "./App";
import { BlockchainJSONInterface } from "./classes";
import { Block } from "./components/Block";

const DiagnosticTool = (props: any) => {

  const {serverAddress} = useContext(ServerAddressContext)

  const [blockchain,setBlockchain] = useState<BlockchainJSONInterface>({blockchain: []})

  useEffect(() => {
      if(serverAddress === null || serverAddress === '') return

      fetch(serverAddress,{
        method: 'POST',
        mode:'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then(res => res.json()).then(json => setBlockchain(json)).catch(e => console.log(e))
  },[serverAddress])

  return (
    <>
        {
          ((blockchain as BlockchainJSONInterface)['blockchain']).map((block) => {
            return (
              <Block key={block.index} block = {block}/>
            )
          })
        }
    </>
  );
}

export default DiagnosticTool