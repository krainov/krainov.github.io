'use strict';

module.exports = function(message) {
    if(NODE_ENV == 'development') {
        console.log(message);
    }

    let app = angular.module('myApp', ['ui.router', 'ngResource']);

    app
        .filter("sanitize", ['$sce', function($sce) {
            return function(htmlCode){
                return $sce.trustAsHtml(htmlCode);
            }
        }])
        .component('posts', {

            templateUrl: '/cleanBlog/posts.html',
            controller: function(postsList) {
                this.posts = postsList.posts;
            }
        })
        .component('post', {
            bindings: {
                postId: '<'
            },
            templateUrl: '/cleanBlog/post.html',
            controller: function($scope, postsList) {
                this.posts = postsList.posts;
                //this.post = $scope.postId;
            },
            controllerAs: 'vm'
        })
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider.state('home', {
                url: '/index.html',
                template: '<posts></posts>'
            });
            $stateProvider.state('post', {
                url: '/post/:postId',
                template: '<post post-id="postId"></post>',
                controller: function($scope, $stateParams) {
                    $scope.postId = $stateParams.postId;
                },
            });
        }])
        .service('postsList', function() {
            this.posts =  [
                {
                    id: 1,
                    date: '21.07.2016 09:30',
                    subject: 'subject 1',
                    by: "admin",
                    subtitle: 'Subtitle 1',
                    preview: `<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>`,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                },
                {
                    id: 2,
                    date: '21.07.2016 10:00',
                    subject: 'subject 2',
                    by: "admin",
                    subtitle: 'Subtitle 2',
                    preview: `<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>`,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',

                },
                {
                    id: 3,
                    date: '21.07.2016 11:00',
                    subject: 'subject 3',
                    by: "admin",
                    subtitle: 'Subtitle 3',
                    preview: `<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>`,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                },
                {
                    id: 4,
                    date: '21.07.2016 12:00',
                    subject: 'subject 4',
                    by: "admin",
                    subtitle: 'Subtitle 4',
                    preview: `<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>`,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                },
                {
                    id: 5,
                    date: '21.07.2016 13:00',
                    subject: 'subject 5',
                    by: "admin",
                    subtitle: 'Subtitle 5',
                    preview: `<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>`,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                },
                {
                    id: 6,
                    date: '21.07.2016 14:00',
                    subject: 'subject 6',
                    by: "admin",
                    subtitle: 'Subtitle 6',
                    preview: `<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>`,
                    text: `<p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>

                            <p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
            
                            <p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>
            
                            <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
            
                            <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>
            
                            <h2 class="section-heading">The Final Frontier</h2>
            
                            <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
            
                            <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
            
                            <blockquote>The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>
            
                            <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
            
                            <h2 class="section-heading">Reaching for the Stars</h2>
            
                            <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>
            
                            <a href="#">
                                <img class="img-responsive" src="img/post-sample-image.jpg" alt="">
                            </a>
                            <span class="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>
            
                            <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>

                            <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>`},
                {
                    id: 7,
                    date: '20.07.2016 15:00',
                    subject: 'subject 7',
                    by: "admin",
                    subtitle: 'Subtitle 7',
                    preview: `<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>`,
                    text: `<p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>

                            <p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
            
                            <p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>
            
                            <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
            
                            <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>
            
                            <h2 class="section-heading">The Final Frontier</h2>
            
                            <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
            
                            <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
            
                            <blockquote>The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>
            
                            <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
            
                            <h2 class="section-heading">Reaching for the Stars</h2>
            
                            <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>
            
                            <a href="#">
                                <img class="img-responsive" src="img/post-sample-image.jpg" alt="">
                            </a>
                            <span class="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>
            
                            <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>

                            <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>`

                }
            ];
        });
};