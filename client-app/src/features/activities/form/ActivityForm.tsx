import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

export const ActivityForm = () => {
    return (
       <Segment>
           <Form>
               <Form.Input placeholder='Title'/>
               <Form.Input placeholder='Description'/>
               <Form.TextArea rows={2} placeholder='Category'/>
               <Form.Input type='date' placeholder='Date'/>
               <Form.Input placeholder='City'/>
               <Form.Input placeholder='Venue'/>
           </Form>
       </Segment>
    )
}