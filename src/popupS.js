import React from 'react';
import ReactDom from 'react-dom';
import Popups from 'react-popups';
 
popupS.confirm({
    content:     '<b>Do you like what you see?</b>',
    labelOk:     'Yes',
    labelCancel: 'No',
    onSubmit: function() {
        console.log(':)');
    },
    onClose: function() {
        console.log(':(');
    }
});