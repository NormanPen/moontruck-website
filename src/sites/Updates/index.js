import Mailchimp from '../../components/Mailchimp';

function Updates() {
    return (
        <div className='pt-24 text-white'>
            <h1 className='text-3xl font-bold '>Moontruck - Developer Preview</h1>
            <section className='mt-8'>
                <h2 className='text-2xl font-bold'>SOME TEXT</h2>
                <ul className='list-disc mt-4 ml-6'>
                    <li>MORE TEXT</li>
                    <li>MORE TEXT</li>
                    <li>MORE TEXT</li>
                    <li>MORE TEXT</li>
                </ul>
            </section>

            <Mailchimp />
        </div>
    );
}

export default Updates;
