# counter.py
def start_counter():
    interval_id = None
    counter = 0

    def increment_counter():
        nonlocal counter
        counter += 1
        document.getElementById("counter").innerHTML = counter

    def start_counter_internal():
        nonlocal interval_id
        if interval_id is None:
            interval_id = setInterval(increment_counter, 1000)

    def round_counter():
        console.log("Runde: " + str(counter))

    def stop_counter():
        nonlocal interval_id
        clearInterval(interval_id)
        interval_id = None

    return start_counter_internal, round_counter, stop_counter

start_counter, round_counter, stop_counter = start_counter()
