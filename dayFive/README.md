# Steps
1. To create new project
    ```
    ng new ProjectName
    ```
    yes for routing and css
2. Inside the new project
    ```
    npm i bootstrap
    ```
    in the *angular.json* file add the relative path of *bootstrap.css* in Styles in build

3. Add needed folders in *app* directory like: Components, Pipes, Directives and Services
    ```
    ng g c users --skip-test --inline-style
    ```
    to add component

    ```
    ng g s users --skip-test
    ```
    to add service

4. In *app.module.ts* file add **FormsModule**, **ReactiveFormsModule**

5. You can remove the content of *app.comonent.html* and add whatever you want like
    ```html
    <app-header></app-header>
    <router-outlet></router-outlet>
    ```

6. You can run the program 
    ```
    ng serve -o
    ```

7. In the *app-routing.modules.ts* file, add needed routes

8. In *app.module.ts* add **HttpClientModule** to imports

9. Add needed services in sevices folder inside app directory
    ```
    ng g s users --skip-tests 
    ```
    and you can opyionaaly add this service to *provider* section in *app.module.ts*

10. In the users service file
    ```ts
    constructor( public myclient: HttpClient) { }
    URL = "/users"; //API

    getAllUsers(){
        return this.myclient.get(this.URL);
    }

    getUserById(id:any){
        return this.myclient.get(this.URL+'/'+id);
    }
    ```
    to use API 

    and to use *getAll*, in the users.component.ts
    ```ts
    constructor(myService: UsersService){
    myService.getAllUsers();
    }
    ```

11. But we need it to run only *OnInit*, so *users.component.ts* will be smth like
    ```ts
    export class UsersComponent implements OnInit {
    constructor(private myService: UsersService){
        console.log(myService.getAllUsers());
    }
    users:any;

    ngOnInit(): void {
        this.myService.getAllUsers().subscribe(
        {
            next:(data)=>{
            this.users = data;
            // console.log(data);
            },
            error:(err)=>{console.log(err);
            }
        }
        );
    }
    }
    ```

12. We need to use Json server, see https://www.npmjs.com/package/json-server 

    -   ```
        npm i json-server -g
        ```

    - Create a data.json file with some data
    - To run 
        ```
        json-server --watch data.json
        ```

13. Finally, to run the project, make sure that the *json-sever* is running 
    ```
    json-server --watch data.json
    ```
    and then run the main project
    ```
    ng serve -o
    ```
    