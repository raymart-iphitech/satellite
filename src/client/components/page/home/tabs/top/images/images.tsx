import { TopValuesState } from "../top"
import { topImagesData } from "./data"


type ImagesProps = { topValues: TopValuesState }

const Images = ({ topValues }: ImagesProps) =>{

  const renderImages = () =>{
    const mappedImages = topImagesData.map(data => (
      <div
        key={ data.tag } 
        className="flex flex-col text-center">
        <div className="mb-2">
          <p>{ data.title }</p>
          <a 
            href={`https://suzaku.eorc.jaxa.jp/JASMIN/data/img/${ topValues.area }/${ data.tag }/${ topValues.year }/img-${ data.tag }-${ topValues.year }${ topValues.month }${ topValues.day }-${ topValues.area }.png`}
            target="_blank">
            <img
              src={`https://suzaku.eorc.jaxa.jp/JASMIN/data/img/${ topValues.area }/${ data.tag }/${ topValues.year }/img-${ data.tag }-${ topValues.year }${ topValues.month }${ topValues.day }-${ topValues.area }.png`} 
              alt="" />
          </a>
        </div>
        <div>
          <p className="flex flex-col">
            { data.title }
            <span>anomaly</span>
          </p>
          <a 
            href={`https://suzaku.eorc.jaxa.jp/JASMIN/data/img/${ topValues.area }/${ data.tag }/${ topValues.year }/img-${ data.tag }_c-${ topValues.year }${ topValues.month }${ topValues.day }-${ topValues.area }.png`}
            target="_blank">
            <img
              src={`https://suzaku.eorc.jaxa.jp/JASMIN/data/img/${ topValues.area }/${ data.tag }/${ topValues.year }/img-${ data.tag }_c-${ topValues.year }${ topValues.month }${ topValues.day }-${ topValues.area }.png`} 
              alt="" />
          </a>
        </div>
      </div>
    ))

    return mappedImages
  }

  return (
    <div className=" flex gap-x-1">
      { renderImages() }
    </div>
  )
}


export default Images