import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact us</h1>



                <form >
                    <div>
                        <label >Name</label>
                        <input type="text" required placeholder='abc' />
                    </div>
                    <div>
                        <label >email</label>
                        <input type="email" required placeholder='abc@xyz.com' />
                    </div>

                    <div>
                        <label >message</label>
                        <input type="text" required placeholder='tell us your querrys ....' />
                    </div>
                    <button type='submit'>send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact