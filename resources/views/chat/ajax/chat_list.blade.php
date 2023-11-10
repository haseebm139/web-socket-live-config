@foreach ($data as $item)
   
    <li id="user-list{{ $item->id }}" class="user-list" data-id='{{ $item->id }}'>
        <div class="pr-1">
            <span class="avatar m-0 avatar-md"><img class="media-object rounded-circle"
                    src="../../../app-assets/images/portrait/small/avatar-s-3.jpg" height="42" width="42"
                    alt="Generic placeholder image">
                <i></i>
            </span>
        </div>
        <div class="user-chat-info">
            <div class="contact-info">
                <h5 class="font-weight-bold mb-0">{{ $item->name }}</h5>
                <p class="truncate">Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops
                    icing</p>
            </div>
            <div class="contact-meta">
                <span class="float-right mb-25">4:14 PM</span>
                <span class="badge badge-primary badge-pill float-right">3</span>
            </div>
        </div>
    </li>
@endforeach
