import Html exposing (..)
import Html.Events exposing (..)
import WebSocket

main =
  Html.program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL

type alias Model =
  { input : String
  , messages : List String
  }


init : (Model, Cmd Msg)
init =
  (Model "" [], Cmd.none)


-- UPDATE

type Msg
  = Input String
  | Send
  | NewMessage String


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    Input newInput ->
      ( { model | input = newInput }, Cmd.none)

    Send ->
      ( { model | input = "" }, WebSocket.send "http://localhost:8000" model.input)

    NewMessage str ->
        let
            newMessages = str :: model.messages
        in
      ( { model | messages = newMessages }, Cmd.none)


-- SUBSCRIPTIONS

subscriptions : Model -> Sub Msg
subscriptions model =
     WebSocket.listen "http://localhost:8000" NewMessage



-- VIEW

view : Model -> Html Msg
view model =
  div []
    [ div [] (List.map viewMessage model.messages)
    , input [onInput Input] []
    , button [onClick Send] [text "Send"]
    ]


viewMessage : String -> Html msg
viewMessage msg =
  div [] [ text msg ]