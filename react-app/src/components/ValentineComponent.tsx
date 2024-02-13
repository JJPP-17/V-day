import { useState } from 'react'

import React from 'react';

import '../App.css'

// Object -> key, value store

// {key: 'value', key1: 123, key2, key3: {key: 'value' } }

// function -> run some code

// function styles() {}

// const anotherFunction = () => {}

// List of images

const images = [

  'images/catno1.webp',

  'images/catno2.png',

  'images/catno3.jpeg',

  'images/catno4.webp',

  'images/catno5.jpeg',

]

// List of texts

const messages = [

  "No",

  "Are you sure?",

  "Oh this is so sad",

  "Don't break my heart :(",

  "You get one more change to think about it",

  "I'm gonna cry...",

]

function ValentineComponent() {

  // image variable (state)

  const [imageUrl, setImageUrl] = useState("images/catfirst.webp")

  // Current no image

  const [currentNoImage, setCurrentNoImage] = useState('images/catno1.webp')

  // text variable (state)

  const [changeText, setchangeText] = useState("Hi bibi! Will you be my Valentine?")

  // button padding multipler variable

  const [buttonPaddingMultiplier, setbuttonPaddingMultiplier] = useState(1)

  // change image and text here

  function updateImageAndText() {

    setImageUrl("images/catyes.jpeg")

    setchangeText("Yayyyy!! Love chuu :3")

  }

  // current no text

  const [currentNoText, setCurrentNoText] = useState("No")

  // when click no-button (1) change text and image

  function updateImageAndTextForNo() {

    // Get next no image

    // Find index of current no image in images array

    const index = images.findIndex((image) => image === currentNoImage)

    // Add one to it for result

    let newNextImageIndex = index + 1

    // If result greater than length of images array set result to 0

    if (newNextImageIndex > images.length - 1) {

      newNextImageIndex = 0

    }
    // No tet whenn clicked No


    // set next no image

    setCurrentNoImage(images[newNextImageIndex])

    setImageUrl(images[newNextImageIndex])

    // set no image text

    // when click no-button change text

    // Get next no text

    // Find index of current no text in images array

    const textIndex = messages.findIndex((message) => message === currentNoText)

    // Add one to it for result

    let newNextTextIndex = textIndex + 1;

    // If result greater than length of images array set result to 0

    if (newNextTextIndex > messages.length - 1) {

      newNextTextIndex = 0

    }

    // set next no text

    setCurrentNoText(messages[newNextTextIndex])

    // increase button padding multiplier

    setbuttonPaddingMultiplier(buttonPaddingMultiplier + 1)

    //
    setchangeText('')

  }

  return (

    <div className='container'>

      <img className="catImg" src={imageUrl} alt="Picture of a cat" />

      <p className="title" >{changeText}</p>

      <div className="buttons" >

        <button type="button" className="btn btnYes" onClick={updateImageAndText} style={{ padding: `${1.5 * buttonPaddingMultiplier}rem ${2.5 * buttonPaddingMultiplier}rem` }}>Yes</button>

        <button type="button" className="btn btnNo" onClick={updateImageAndTextForNo}>{currentNoText}</button>

      </div>

    </div>

  );

}

export default ValentineComponent;