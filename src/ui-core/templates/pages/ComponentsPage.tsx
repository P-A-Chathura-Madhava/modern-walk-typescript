import React from 'react'
import FieldDropNormal from '../../components/atoms/FieldDrop/FieldDropNormal'
import FieldDropOrange from '../../components/atoms/FieldDrop/FieldDropOrange'
import TableSort1 from '../../components/atoms/TableSort/TableSort1'
import UpArrow from '../../components/atoms/AccordionControls/UpArrow'
import DownArrow from '../../components/atoms/AccordionControls/DownArrow'
import SearchNormalIcon from '../../components/atoms/SearchInteractions/SearchNormalIcon'
import SearchOrangeIcon from '../../components/atoms/SearchInteractions/SearchOrangeIcon'
import SearchBigIcon from '../../components/atoms/SearchInteractions/SearchBigIcon'
import RegularDatePicker from '../../components/atoms/DatePicker/RegularDatePicker'
import OrangeDatePicker from '../../components/atoms/DatePicker/OrangeDatePicker'
import RadioBtn from '../../components/atoms/RadioButton/RadioBtn'
import CheckBox from '../../components/atoms/CheckBox/CheckBox'
import OrangeGoButton from '../../components/atoms/GoButton/OrangeGoButton'
import OrangeGoButtonBig from '../../components/atoms/GoButton/OrangeGoButtonBig'
import RegularGoButton from '../../components/atoms/GoButton/RegularGoButton'
import PrimaryBtn from '../../components/atoms/Button/PrimaryBtn'
import SecondaryBtn from '../../components/atoms/Button/SecondaryBtn'
import InputField from '../../components/atoms/InputField/InputField'

function ComponentsPage() {
  return (
    <div className='container mx-auto mt-4'>
        <div>
            <h2>Field Drop</h2>
            <FieldDropNormal />
            <FieldDropOrange />
        </div>
        <div>
            <h2>Table Sort</h2>
            <TableSort1 />
        </div>
        <div>
            <h2>Accordion Controls</h2>
            <UpArrow />
            <DownArrow />
        </div>
        <div>
            <h2>Search Interactions</h2>
            <SearchNormalIcon />
            <SearchOrangeIcon />
            <SearchBigIcon />
        </div>
        <div>
            <h2>Date Picker</h2>
            <RegularDatePicker />
            <OrangeDatePicker />
        </div>
        <div>
            <h2>Selection Controls</h2>
            <RadioBtn />
            <CheckBox />
        </div>
        <div>
            <h2>Go Button</h2>
            <RegularGoButton />
            <OrangeGoButton />
            <OrangeGoButtonBig />
        </div>
        <div>
            <h2>Simple Button</h2>
            <PrimaryBtn />
            <SecondaryBtn />
        </div>
        <div>
            <h2>Input Field</h2>
            <InputField />
        </div>
        <div className='h-20'></div>
    </div>
  )
}

export default ComponentsPage