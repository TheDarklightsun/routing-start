import {Component, OnInit} from '@angular/core';
import {ServersService} from "../servers.service";
import {ActivatedRoute, Data, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server!: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
    // const id = +this.route.snapshot.params['id'];
    // const server = this.serversService.getServer(id);
    //
    // if (server) {
    //   this.server = server;
    // } else {
    //   console.log('Server not found');
    // }
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       const serverId = params['id'];
    //       const server = this.serversService.getServer(+serverId);
    //
    //       if (server) {
    //         this.server = server;
    //       } else {
    //         console.error(`Сервер с id ${serverId} не найден.`);
    //       }
    //     }
    //   );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
