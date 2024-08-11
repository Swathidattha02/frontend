import axios from'axios';
export const StudentData=()=>{
    const [data,setData] =useState([])
    const featchData=async()=>{
        await axios.post(api+"/students")
        .then((res)=>{
           setData(res?.data)
        })
        .catch((e)=>console.log(e))
    }
    useEffect(()=>{
        featchData()
    },[])
    return(
        <>
            <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Bootcamp</TableCaption>
    <Thead>
      <Tr>
        <Th>Gmail</Th>
        <Th>Registrationno</Th>
        <Th isNumeric>mobileno</Th>
      </Tr>
    </Thead>
    <Tbody>
        {/* {
            data?.map((val))=>(
                <Tr>
                    <Td>{val.Gmail}</Td>
                </Tr>
            )
        } */}
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td isNumeric></Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td isNumeric></Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td isNumeric></Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>


        </>
    )
}