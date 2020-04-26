import React from 'react';
import IndexLayout from '../posts/components/layout/IndexLayout';
import Featured from '../posts/components/Featured';


function BlogIndexPage() {
    return (
        <IndexLayout>
            <Featured />
        </IndexLayout>
    );
}

export default BlogIndexPage;
