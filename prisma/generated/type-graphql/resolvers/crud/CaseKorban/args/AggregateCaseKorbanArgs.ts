import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseKorbanOrderByInput } from "../../../inputs/CaseKorbanOrderByInput";
import { CaseKorbanWhereInput } from "../../../inputs/CaseKorbanWhereInput";
import { CaseKorbanWhereUniqueInput } from "../../../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCaseKorbanArgs {
  @TypeGraphQL.Field(_type => CaseKorbanWhereInput, {
    nullable: true
  })
  where?: CaseKorbanWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanOrderByInput], {
    nullable: true
  })
  orderBy?: CaseKorbanOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseKorbanWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseKorbanWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
