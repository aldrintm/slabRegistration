import { useState } from 'react'
import '../../index.css'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

const SlabRegistration = () => {
  const initialData = {
    brand: '',
    color: '',
    thickness: '',
    finish: '',
    length: '',
    width: '',
    quantity: '',
    location: '',
    createdBy: '',
    tag: '',
    selectedFile: '',
    textArea: '',
  }

  const [postData, setPostData] = useState(initialData)

  const dispatch = useDispatch()

  const fileChange = (e) => {
    e.target.value == null
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createPost(postData))
    e.target.value = null

    setPostData(initialData)
  }

  return (
    <form
      className='px-6 py-2 bg-white-200 md:bg-white md:align-middle md:w-full'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-4 my-2'>
        <div className='bg-teal-300 rounded-xl py-6 md:bg-sky-500 md:px-6'>
          <h1 className='text-xl text-center font-semibold leading-3 md:text-white md:text-2xl md:underline md:underline-offset-4'>
            Plamar USA - Slab Registration
          </h1>
        </div>
        {/* brand selection  */}
        <select
          className='select select-primary select-bordered w-full'
          required
          value={postData.brand}
          onChange={(e) =>
            setPostData((prevState) => ({ ...postData, brand: e.target.value }))
          }
        >
          <option value='' disabled selected>
            Choose Stone Type or Brand
          </option>
          <option value='Caesarstone'>Caesarstone</option>
          <option value='Cambria'>Cambria</option>
          <option value='Silestone'>Silestone</option>
          <option value='LG Viatera'>LG Viatera</option>
          <option value='Vadara'>Vadara</option>
          <option value='MSI Q Quartz'>MSI Q Quartz</option>
          <option value='Daltile One Quartz'>Daltile One Quartz</option>
          <option value='AZT Della Terra Quartz'>AZT Della Terra Quartz</option>
          <option value='Corian Quartz'>Corian Quartz</option>
          <option value='Wilsonart Quartz'>Wilsonart Quartz</option>
          <option value='Hanstone Quartz'>Hanstone Quartz</option>
          <option value='Pental Quartz'>Pental Quartz</option>
          <option value='Teltos Quartz'>Teltos Quartz</option>
          <option value='Bedrosians Sequel Quartz'>
            Bedrosians Sequel Quartz
          </option>
          <option value='Dekton'>Dekton</option>
          <option value='Neolith'>Neolith</option>
          <option value='Diresco'>Diresco</option>
          <option value='CORIAN SOLID SURFACE'>CORIAN SOLID SURFACE</option>
          <option value='HI-MACS SOLID SURFACE'>HI-MACS SOLID SURFACE</option>
          <option value='OTHERS - TBD'>OTHERS - TBD</option>
        </select>
        {/* Color Name Input here */}
        <input
          type='text'
          placeholder='Name of Color'
          className='input input-bordered input-primary w-full'
          required
          name='color'
          value={postData.color}
          onChange={(e) => setPostData({ ...postData, color: e.target.value })}
        />
        {/* Thickness and Finish */}
        <div className='flex flex-row space-x-4'>
          <select
            className='select select-primary select-bordered w-full md:w-full'
            required
            name='thickness'
            value={postData.thickness}
            onChange={(e) =>
              setPostData({ ...postData, thickness: e.target.value })
            }
          >
            <option value='' disabled selected>
              Choose Thickness
            </option>
            <option value='1cm'>1cm</option>
            <option value='2cm'>2cm</option>
            <option value='3cm'>3cm</option>
            <option value='1/2"'>1/2"</option>
            <option value='Special'>Special</option>
          </select>
          <select
            className='select select-primary select-bordered w-full md:w-full'
            required
            name='finish'
            value={postData.finish}
            onChange={(e) =>
              setPostData({ ...postData, finish: e.target.value })
            }
          >
            <option value='' disabled selected>
              Choose Finish
            </option>
            <option value='Polished'>Polished</option>
            <option value='Honed'>Honed</option>
            <option value='Matte'>Matte</option>
            <option value='Suede'>Suede</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        {/* Length and Width */}
        <div className='flex flex-row space-x-4'>
          <select
            className='select select-primary select-bordered w-full md:w-full'
            required
            name='length'
            value={postData.length}
            onChange={(e) =>
              setPostData({ ...postData, length: e.target.value })
            }
          >
            <option value='' disabled selected>
              Length (inches)
            </option>
            <option value='30'>30</option>
            <option value='35'>35</option>
            <option value='40'>40</option>
            <option value='45'>45</option>
            <option value='50'>50</option>
            <option value='55'>55</option>
            <option value='60'>60</option>
            <option value='65'>65</option>
            <option value='70'>70</option>
            <option value='75'>75</option>
            <option value='80'>80</option>
            <option value='85'>85</option>
            <option value='90'>90</option>
            <option value='95'>95</option>
            <option value='100'>100</option>
            <option value='105'>105</option>
            <option value='110'>110</option>
            <option value='115'>115</option>
            <option value='120'>120</option>
            <option value='122'>122</option>
            <option value='124'>124</option>
            <option value='126'>126</option>
            <option value='128'>128</option>
            <option value='130'>130</option>
            <option value='132'>132</option>
            <option value='135'>135</option>
          </select>
          <select
            className='select select-primary select-bordered w-full md:w-full'
            required
            name='width'
            value={postData.width}
            onChange={(e) =>
              setPostData({ ...postData, width: e.target.value })
            }
          >
            <option value='' disabled selected>
              Width (inches)
            </option>
            <option>20</option>
            <option>22</option>
            <option>24</option>
            <option>26</option>
            <option>28</option>
            <option>30</option>
            <option>32</option>
            <option>34</option>
            <option>36</option>
            <option>38</option>
            <option>40</option>
            <option>42</option>
            <option>44</option>
            <option>46</option>
            <option>48</option>
            <option>50</option>
            <option>52</option>
            <option>54</option>
            <option>56</option>
            <option>58</option>
            <option>60</option>
            <option>62</option>
            <option>63</option>
            <option>64</option>
            <option>65</option>
            <option>66</option>
            <option>68</option>
            <option>70</option>
            <option>72</option>
            <option>74</option>
            <option>76</option>
            <option>78</option>
            <option>80</option>
          </select>
        </div>

        {/* Shop Location and Qty */}
        <div className='flex flex-row space-x-4'>
          <select
            className='select select-primary select-bordered w-full md:w-full'
            required
            name='quantity'
            value={postData.quantity}
            onChange={(e) =>
              setPostData({ ...postData, quantity: e.target.value })
            }
          >
            <option value='' disabled selected>
              Quantity
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>20+</option>
            <option>25+</option>
            <option>30+</option>
            <option>35+</option>
            <option>40+</option>
            <option>45+</option>
            <option>50+</option>
          </select>
          <select
            className='select select-primary select-bordered w-full'
            required
            name='location'
            value={postData.location}
            onChange={(e) =>
              setPostData({ ...postData, location: e.target.value })
            }
          >
            <option value='' disabled selected>
              Shop Location
            </option>
            <option>Caesarstone Area</option>
            <option>Cambria Area</option>
            <option>Silestone Area</option>
            <option>LG Viatera Area</option>
            <option>Dekton Area</option>
            <option>MSI/Vadara Area</option>
            <option>Inside Warehouse A</option>
            <option>Inside Warehouse B</option>
            <option>Inside Warehouse C</option>
            <option>Aisle 1</option>
            <option>Aisle 2</option>
            <option>Aisle 3</option>
            <option>Aisle 4</option>
            <option>Aisle 5</option>
            <option>Aisle 6</option>
            <option>Aisle 7</option>
            <option>Aisle 8</option>
            <option>Outside Yard Wallside</option>
            <option>Outside Yard Gateside</option>
          </select>
        </div>
        {/* Updated by or Creator */}
        <div className='flex flex-row space-x-4'>
          <select
            className='select select-primary select-bordered w-full md:w-full'
            required
            name='createdBy'
            value={postData.createdBy}
            onChange={(e) =>
              setPostData({ ...postData, createdBy: e.target.value })
            }
          >
            <option value='' disabled selected>
              Created by:
            </option>
            <option>Kevin</option>
            <option>Aldrin</option>
            <option>Chele</option>
            <option>Sondra</option>
            <option>Dana</option>
            <option>Maria</option>
            <option>Liz</option>
            <option>Marjorie</option>
            <option>Kurt</option>
          </select>
          <select
            className='select select-primary select-bordered w-full md:w-full'
            required
            name='tag'
            value={postData.tag}
            onChange={(e) => setPostData({ ...postData, tag: e.target.value })}
          >
            <option value='' disabled selected>
              Tag:
            </option>
            <option>Full Slab</option>
            <option>Remnant</option>
            <option>Customer</option>
            <option>Special</option>
          </select>
        </div>
        {/* file input */}
        {/* <input
          type='file'
          multiple={false}
          className='file-input file-input-bordered file-input-info file-input-md w-full'
          name='selectedFile'
          value={postData.selectedFile}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        /> */}
        <FileBase
          type='file'
          multiple={false}
          className='file-input file-input-bordered file-input-info file-input-md w-full'
          name='selectedFile'
          value={postData.selectedFile}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
          onChange={fileChange}
        />
        {/* description area - this is NOT saveable in mongoose*/}
        <textarea
          id='textarea'
          className='textarea textarea-bordered textarea-primary w-full'
          placeholder='Describe the slab (optional) ...'
          name='textArea'
          value={postData.textArea}
          onChange={(e) =>
            setPostData({ ...postData, textArea: e.target.value })
          }
        ></textarea>
        {/* form submit */}
        <button className='btn btn-lg btn-success text-white text-2xl font-semibold'>
          Register Slab
        </button>
      </div>
    </form>
  )
}

export default SlabRegistration
