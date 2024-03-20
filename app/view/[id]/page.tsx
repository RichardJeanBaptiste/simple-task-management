"use client"


import React, {useState, useEffect} from 'react';

export default function ViewTask({params}: any) {
    return (
        <>
            <p>{params.id}</p>
        </>
    )
}