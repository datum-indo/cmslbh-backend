import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityNonlitOrderByInput } from "../../../inputs/CaseProgressActivityNonlitOrderByInput";
import { CaseProgressActivityNonlitWhereInput } from "../../../inputs/CaseProgressActivityNonlitWhereInput";
import { CaseProgressActivityNonlitWhereUniqueInput } from "../../../inputs/CaseProgressActivityNonlitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCaseProgressActivityNonlitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityNonlitWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitOrderByInput], {
    nullable: true
  })
  orderBy?: CaseProgressActivityNonlitOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseProgressActivityNonlitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
