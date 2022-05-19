import { FunctionComponent } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Expense, useExpensesQuery } from "../../generated/graphql";
import { ExpenseItemComponent } from "../components/expense-item";


interface ExpenseListPageProps {
    
}
 
export const ExpenseListPage: FunctionComponent = () => {
    const { data, loading, refetch } = useExpensesQuery({
        fetchPolicy: 'network-only',
    });
    return (
        <>
            <div className="d-flex justify-content-end mb-3">
                <div>
                    <Link to='new'>
                        <Button variant='primary'>Nova Despesa</Button>
                    </Link>
                </div>
            </div>

            <div className='d-flex flex-column gap-2'>
                
                {loading && (
                    <div className='align-self-center'>
                        <Spinner animation='border' />
                    </div>
                )}

                {data?.expenses
                    .filter((e) => !e.paid)
                    .map((expense) => (
                            <ExpenseItemComponent 
                                key={expense.id}
                                expense={expense as Expense}
                                onDeleteExecuted={refetch}
                            />
                        )
                    )
                }

                <h2 className='text-center my-2'>Contas Pagas</h2>

                {data?.expenses
                    .filter((e) => e.paid)
                    .map((expense) => (
                            <ExpenseItemComponent 
                                key={expense.id}
                                expense={expense as Expense}
                                onDeleteExecuted={refetch}
                            />
                        )
                    )
                }

            </div>
        </>
    )
}
 
 