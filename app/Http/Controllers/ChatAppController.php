<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chat;
use App\Events\MessageEvent;
class ChatAppController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
         $data = User::whereNotIn('id',[auth()->user()->id])->get();
        return view('chat.index',compact('data'));
    }

    public function chatList(){
        return 'aaaaa';

    }

    public function userList()
    {
        return User::all();
    }

    public function saveChat(Request $request){

        try {

            $chat = Chat::create([
                'sender_id'=>$request->sender_id,
                'receiver_id'=>$request->receiver_id,
                'message'=>$request->message
            ]);
            event(new MessageEvent($chat));
            return response()->json(['success'=>true,'msg'=>$chat]);
        } catch (\Exception $e) {
            return response()->json(['success'=>false,'msg'=>$e->getMessage()]);
        }
    }

    public function loadChat(Request $request){

        try {

            $chats = Chat::
            where(function($q) use ($request) {
                $q->where('sender_id',$request->sender_id)
                ->orWhere('sender_id',$request->receiver_id);
            })
            ->where(function($q) use ($request) {
                $q->where('receiver_id',$request->sender_id)
                ->orWhere('receiver_id',$request->receiver_id);
            })->get();
            return response()->json(['success'=>true,'data'=>$chats]);
        } catch (\Exception $e) {
            return response()->json(['success'=>false,'msg'=>$e->getMessage()]);
        }
    }
    // $newItem =[];
    // $data = []; //your all data
    // foreach ($data as $key => $value) {
    //     foreach ($value as $key => $item) {
    //         array_push($newItem,$item);
    //     }
    // }
    // print_r($newItem);
}


