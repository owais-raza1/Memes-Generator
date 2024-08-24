import DetailUI from "./index";

export default async function Detail({params}: any) {

  const {id} = params;
  console.log(id);

  const res = await fetch("https://api.imgflip.com/get_memes");
  const data: any = await res.json();
  let allItems = data.data.memes;
  const item = allItems.find((itempm: any) => itempm.id === id);

  return <DetailUI response={item}/>
}
