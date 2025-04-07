### Quickstart

Assuming you have the correct tools and runtimes preinstalled simply run `yarn ios` or `npm run ios`.

### Installing runtimes and tools

React Native projects can be a little finnicky to work with and get running and so the project has the correct runtimes and tools pinned using [mise](https://mise.jdx.dev/getting-started.html), a runtime and tool management tool. Upon installing mise you can run `mise i` to install the correct versions of Node, Ruby, Cocoapods and Java.

### Installing dependencies

You can install the project dependencies using `yarn install` or `npm install`. A postinstall script should automatically install the pods required to launch the iOS app.

### Starting the app

You can run the app using `yarn ios` or `npm run ios`

### Notes

The app is a simple React Native app without any external dependencies (although for a real project it would definitely need some). It shows a home/welcome screen that navigates to the consultation questions screen where a user can enter in their answers to a series of 5 questions each shown only upon a successfuly entry of the previous question. The user can navigate back through the list of questions and can then amend their answers.The results are logged to the console (since this is using the latest version of React Native remember that logs have now moved to the browser! Upon running the metro bundler press `j` to launch the dev tools in the browser.)

A paginated scrollview was chosen as the medium to show the questions as it gives a nice animation effect to the user as they answer the questions and evokes feelings of progress.
The answers are stored in a ref object as there is no reason to use state to update the UI. Many complaints about the slowness of React Native are due to engineers over using state updates when they aren't necessary. If nothing on screen needs to update then it doesn't need to be held in state. Following good programming practices and understanding the rendering cycle of React is something I feel necessary for a good React Native application given that there are many devices that need supporting and not all of them have the computational power of the latest and greatest flagships.

I've structured the repo such that the source code lives in `/src` with a directory each for the logically relevant parts of the app. I'm not a fan of the atomic structure used in some codebases and think it can easily become unwieldy as each engineer has legitimate differing opinions as to what constitutes an atom/molecule/organism and it can make things trickier to find. As such the components live in `components/` each component is then in turn in its own directory where the styling code lives in its own file for better cleanliness and clarity of the logic required for the component in the `.tsx` file. I didn't have time to add tests but this is also where tests would live following the convention `ComponentName.test.tsx`.

Other directories include `screens/` where components are imported to create a functional screen. Any screen specific components would live in the screen directory. If it's more generic it would live in `components/`. The `api/` directory is where the api client and http request functions would live. I'd probably use axios and react-query for data-fetching and posting. Any auth tokens would be attached using axios interceptors and retrieved from the local keychain/keystore using react-native-keychain. Any assets would live in `assets/` in their relevant subdirectory, e.g. `images/` for images `audio/` for audio files etc.

I used bare React Native as it's what I'm more used to and feel quicker using it, but Expo would be my choice for a greenfield app given its support and the majority of the community now using it as the framework of choice for RN it would mean we have access to resources for debugging obscure bugs as well as a responsive team that is actively fixing issues in addition to the issues and stack overflow threads.

React navigation would be my choice of library for navigation (although for this simple project I simply used a piece of state to mock navigation). Since Android 15 there are some issues surrounding edge-to-edge and the app not respecting safe-areas (such as the camera notch). I didn't install it for this so as to keep things light, but would use react-native-edge-to-edge to handle Android layout better.

I ultimately ended up running out of time but would have liked to include some testing with Jest and react native testing library. I would also have liked to encapsulate the logic from the views a bit better and move them into a hook that would expose the necessary functionality for the screen e.g. `useConsultationQuestions.ts`.

In a real project I'd also set up more thorough linting rules to keep the codebase healthy and ensure standards. I feel that having agreed upon standards is a good method for ensuring readability between engineers and also reducing bugs.

Global state management was not necessary here but I'd probably opt for something like Zustand or Jotai to handle that. Using popular and well supported libraries ensures you have a wider pool of workers that can settle in comfortably more quickly.

I've included a video of the running app below:

https://github.com/user-attachments/assets/25a12a64-29f5-418d-8c86-ce2e67f9c69e


